export interface Product {
    title:       string;
    purpose:     Color[];
    colors:      Color[];
    product_cat: string[];
    price:       number;
    sale_price:  number;
    slug:        string;
    thumb:       string;
    variations:  Variation[];
    specials:    Special[];
}

export interface Color {
    name: string;
    slug: string;
}

export enum Special {
    Bestsellery = "Bestsellery",
    EdycjaLimitowana = "Edycja limitowana",
    Nowość = "Nowość",
}

export interface Variation {
    image:         string;
    regular_price: number;
    price:         number;
    variation_id:  number;
    show_gallery:  boolean;
    specials:      Specials;
    color:         null | string;
    term:          Term;
    default:       boolean;
}

export interface Specials {
    Bestseller:          Bestseller;
    Nowość:              Bestseller;
    "Edycja specjalna":  Bestseller;
    "Edycja limitowana": Bestseller;
}

export enum Bestseller {
    Empty = "",
    No = "no",
    Yes = "yes",
}

export interface Term {
    term_id:          number;
    name:             string;
    slug:             string;
    term_group:       number;
    term_taxonomy_id: number;
    taxonomy:         Taxonomy;
    description:      string;
    parent:           number;
    count:            number;
    filter:           Filter;
    term_order:       string;
}

export enum Filter {
    Raw = "raw",
}

export enum Taxonomy {
    PaKolor = "pa_kolor",
}