/**
 * CHUMS common product types
 *  @author Steve Montgomery <https://github.com/UtahGooner>
 */
import {BooleanLike} from "./basic-types";

export type ProductType = 'F'|'K'|'R'|'D';

export interface Warehouse {
    WarehouseCode:string,
    WarehouseDesc: string,
    WarehouseStatus: 'A'|'I',
}

export interface ProductLine {
    ProductLine: string,
    ProductLineDesc: string,
    Valuation: string,
    ExplodedKitItems: string,
    active: boolean,
}

export interface ProductCategory {
    Category2: string,
    id: number|null,
    code: string,
    description: string|null,
    active: boolean,
    notes: string|null,
    tags: unknown|null,
    productLine: string|null,
}

export interface ProductCollection {
    Category3: string,
}

export interface BaseSKU {
    Category4: string,
    id: number|null,
    sku_group_id: number|null,
    sku: string|null,
    description: string|null,
    upc: string|null,
    active: boolean|null,
    notes?: string|null,
    tags?: unknown|null,
}


export interface ProductColor {
    id: number,
    code: string,
    description: string,
    active: boolean,
    notes: string|null,
    tags: unknown|null,
}

export interface ProductMixInfo {
    id: number,
    code: string,
    description: string,
    active: boolean,
    notes: string|null,
    tags: unknown|null,
}


export interface CountryOfOrigin {
    countryOfOrigin: string,
}

export interface PrimaryVendor {
    PrimaryVendorNo: string,
    VendorName: string,
}


export interface ProductStatus {
    id: number,
    code: string,
    description: string,
}

export interface ProductSeason {
    id: number,
    code: string,
    description: string,
    properties: {
        color: string,
    },
    notes: string,
    active: boolean,
    userId: number,
}

export interface ProductWarehouse {
    WarehouseCode: string,
    WarehouseDesc: string,
    WarehouseStatus: string,
}

export interface SKUGroup {
    id: number,
    code: string,
    description: string,
    active: boolean,
    notes: string|null,
    tags: unknown,
    productLine: string,
}

export interface ProductMaterial {
    id: number,
    code: string,
    notes: string,
    description: string,
    active: boolean,
}

export interface ProductDimension {
    quantity?: number,
    length: number|null,
    width: number|null,
    weight: number|null,
    height: number|null,
}
export interface AdjustableDimension {
    min: number|null,
    max: number|null,
    name?: string,
    isAdjustable?: boolean,
}
export interface ProductAttributes {
    notes?: string,
    productId?: number,
    material?: ProductMaterial,
    dimensionNotes?: string,
    casePackDimensions?: ProductDimension|{},
    adjustable?: AdjustableDimension|{},
    shippingDimensions?: ProductDimension|{},
    colors?: [],
    dimensions?: ProductDimension|{},
}

export interface ProductStatusAttributes {
    new?: boolean,
    updating?: boolean,
    approved?: boolean,
    live?: boolean,
    discontinued?: boolean,
}

export interface ProductMaster {
    id: number,
    company: string,
    devCode: string,
    name: string,
    status: ProductStatusAttributes,
    active: boolean,
    isNew: boolean,
    isUpdating: boolean,
    isApproved: boolean,
    isLive: boolean,
    productType: string|null,
    productLine: string|null,
    category: string|null,
    subCategory: string|null,
    idSKUGroup: number,
    SKU: string,
    UPC: string,
    sellAsSelf: boolean,
    sellAsMix: boolean,
    sellAsColors: boolean,
    color: string|null,
    suggestedRetailPrice: number,
    stdPrice: number,
    stdCost: number,
    notes: string|null,
    userId: number|null,
    dateCreated: string,
    dateUpdated: string,
    attributes?: ProductAttributes,
}