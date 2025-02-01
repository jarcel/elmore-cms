import type { Schema, Struct } from '@strapi/strapi';

export interface SlidesReview extends Struct.ComponentSchema {
  collectionName: 'components_slides_reviews';
  info: {
    displayName: 'Review';
    icon: 'star';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    Credit: Schema.Attribute.String;
    PublicationImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    StarRating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface SlidesTagline extends Struct.ComponentSchema {
  collectionName: 'components_slides_taglines';
  info: {
    displayName: 'Tagline';
    icon: 'quote';
  };
  attributes: {
    Content: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'slides.review': SlidesReview;
      'slides.tagline': SlidesTagline;
    }
  }
}
