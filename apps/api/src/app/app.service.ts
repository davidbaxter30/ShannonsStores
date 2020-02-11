import { Injectable } from '@nestjs/common';
import { Message, Product } from '@shannons-shops/api-interfaces';

const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');
const blocksToHtml = require('@sanity/block-content-to-html');
import { environment } from '../environments/environment.prod';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  async getProducts(): Promise<Product[]> {
    const sanity = await sanityClient({
      projectId: environment.projectId,
      dataset: environment.dataset,
      token: environment.sanityToken,
      useCdn: false,
    });
    const query = '*[_type=="product"] | order(title asc)';

    return await sanity.fetch(query)
      .then(results => {
        const products = results.map(product => {
          const output = {
            id: product.slug.current,
            name: product.title,
            price: product.defaultProductVariant.price,
            description: product.blurb ? product.blurb.en : '',
            body: blocksToHtml({
              blocks: product.body.en
            }),
            image: ''
          }

          const image = product.defaultProductVariant.images && product.defaultProductVariant.images.length > 0
            ? product.defaultProductVariant.images[0].asset._ref
            : null;

          if (image) {
            output.image = imageUrlBuilder(sanity).image(image).size(300, 300).fit('fillmax').url();
          }

          return output;
        });

        return products;
      });
  }
}
