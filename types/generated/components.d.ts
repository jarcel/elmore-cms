import type { Schema, Struct } from '@strapi/strapi';

export interface AdaptationFeaturesAdaptationSource
  extends Struct.ComponentSchema {
  collectionName: 'components_adaptation_features_adaptation_sources';
  info: {
    displayName: 'AdaptationSource';
  };
  attributes: {
    book: Schema.Attribute.Relation<'oneToOne', 'api::book.book'>;
    Type: Schema.Attribute.Enumeration<
      [
        'Novel',
        'Short Story',
        'Novel and Screenplay',
        'Original Screenplay',
        'Adapted Screenplay',
      ]
    >;
  };
}

export interface BookFeaturesAdaptationType extends Struct.ComponentSchema {
  collectionName: 'components_book_features_adaptation_types';
  info: {
    displayName: 'AdaptationType';
    icon: 'television';
  };
  attributes: {
    adaptation: Schema.Attribute.Relation<
      'oneToOne',
      'api::adaptation.adaptation'
    >;
    Type: Schema.Attribute.Enumeration<
      ['Film', 'TV Show', 'TV Movie', 'TV Pilot']
    >;
  };
}

export interface BooksNextBooks extends Struct.ComponentSchema {
  collectionName: 'components_books_next_books';
  info: {
    displayName: 'Next Books';
    icon: 'book';
  };
  attributes: {
    books: Schema.Attribute.Relation<'oneToMany', 'api::book.book'>;
  };
}

export interface SlidesAdaptation extends Struct.ComponentSchema {
  collectionName: 'components_slides_adaptations';
  info: {
    description: '';
    displayName: 'Adaptation';
    icon: 'television';
  };
  attributes: {
    adaptation: Schema.Attribute.Relation<
      'oneToOne',
      'api::adaptation.adaptation'
    >;
    AdaptationImage: Schema.Attribute.Media<'images'>;
    Content: Schema.Attribute.RichText;
  };
}

export interface SlidesBook extends Struct.ComponentSchema {
  collectionName: 'components_slides_books';
  info: {
    displayName: 'Book';
    icon: 'book';
  };
  attributes: {
    book: Schema.Attribute.Relation<'oneToOne', 'api::book.book'>;
  };
}

export interface SlidesCharacter extends Struct.ComponentSchema {
  collectionName: 'components_slides_characters';
  info: {
    displayName: 'Character';
    icon: 'user';
  };
  attributes: {
    CharacterImage: Schema.Attribute.Media<'images' | 'files'>;
    Content: Schema.Attribute.Text;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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
      'adaptation-features.adaptation-source': AdaptationFeaturesAdaptationSource;
      'book-features.adaptation-type': BookFeaturesAdaptationType;
      'books.next-books': BooksNextBooks;
      'slides.adaptation': SlidesAdaptation;
      'slides.book': SlidesBook;
      'slides.character': SlidesCharacter;
      'slides.review': SlidesReview;
      'slides.tagline': SlidesTagline;
    }
  }
}
