import { TEditorConfiguration } from './core';
type TValue = {
    document: TEditorConfiguration;
    selectedBlockId: string | null;
    selectedSidebarTab: 'block-configuration' | 'styles';
    selectedMainTab: 'editor' | 'preview' | 'json' | 'html';
    selectedScreenSize: 'desktop' | 'mobile';
    inspectorDrawerOpen: boolean;
    samplesDrawerOpen: boolean;
};
export declare function useDocument(): Record<string, import("@usewaypoint/document-core").BlockConfiguration<{
    Avatar: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            textAlign: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["left", "center", "right"]>>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            size: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            shape: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["circle", "square", "rounded"]>>>;
            imageUrl: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
            alt: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
        }, "strip", import("zod").ZodTypeAny, {
            size?: number | null | undefined;
            shape?: "circle" | "square" | "rounded" | null | undefined;
            imageUrl?: string | null | undefined;
            alt?: string | null | undefined;
        }, {
            size?: number | null | undefined;
            shape?: "circle" | "square" | "rounded" | null | undefined;
            imageUrl?: string | null | undefined;
            alt?: string | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        style?: {
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            size?: number | null | undefined;
            shape?: "circle" | "square" | "rounded" | null | undefined;
            imageUrl?: string | null | undefined;
            alt?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            size?: number | null | undefined;
            shape?: "circle" | "square" | "rounded" | null | undefined;
            imageUrl?: string | null | undefined;
            alt?: string | null | undefined;
        } | null | undefined;
    }>;
    Button: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            backgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            fontSize: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            fontFamily: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["bold", "normal"]>>>;
            textAlign: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["left", "center", "right"]>>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            buttonBackgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            buttonStyle: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["rectangle", "pill", "rounded"]>>>;
            buttonTextColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            fullWidth: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodBoolean>>;
            size: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["x-small", "small", "large", "medium"]>>>;
            text: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
            url: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
        }, "strip", import("zod").ZodTypeAny, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "medium" | "x-small" | "small" | "large" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "medium" | "x-small" | "small" | "large" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "medium" | "x-small" | "small" | "large" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "medium" | "x-small" | "small" | "large" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }>;
    Container: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            backgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            borderColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            borderRadius: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            childrenIds: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
        }, "strip", import("zod").ZodTypeAny, {
            [x: string]: any;
        }, {
            [x: string]: any;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    ColumnsContainer: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            backgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            columns: import("zod").ZodTuple<[import("zod").ZodObject<{
                childrenIds: import("zod").ZodArray<import("zod").ZodString, "many">;
            }, "strip", import("zod").ZodTypeAny, {
                [x: string]: any;
            }, {
                [x: string]: any;
            }>, import("zod").ZodObject<{
                childrenIds: import("zod").ZodArray<import("zod").ZodString, "many">;
            }, "strip", import("zod").ZodTypeAny, {
                [x: string]: any;
            }, {
                [x: string]: any;
            }>, import("zod").ZodObject<{
                childrenIds: import("zod").ZodArray<import("zod").ZodString, "many">;
            }, "strip", import("zod").ZodTypeAny, {
                [x: string]: any;
            }, {
                [x: string]: any;
            }>], null>;
            fixedWidths: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodTuple<[import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>, import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>, import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>], null>>>;
            columnsCount: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<2>, import("zod").ZodLiteral<3>]>>>;
            columnsGap: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            contentAlignment: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["top", "middle", "bottom"]>>>;
        }, "strip", import("zod").ZodTypeAny, {
            [x: string]: any;
        }, {
            [x: string]: any;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    Heading: import("zod").ZodObject<{
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            text: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
            level: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["h1", "h2", "h3"]>>>;
        }, "strip", import("zod").ZodTypeAny, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }>>>;
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            color: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            backgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            fontFamily: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["bold", "normal"]>>>;
            textAlign: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["left", "center", "right"]>>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    Html: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            color: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            backgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            fontFamily: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontSize: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            textAlign: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["left", "right", "center"]>>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            contents: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
        }, "strip", import("zod").ZodTypeAny, {
            contents?: string | null | undefined;
        }, {
            contents?: string | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            contents?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            contents?: string | null | undefined;
        } | null | undefined;
    }>;
    Image: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
            backgroundColor: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
            textAlign: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["center", "left", "right"]>>>;
        }, "strip", import("zod").ZodTypeAny, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
        }, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            width: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            height: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            url: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
            alt: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
            linkHref: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
            contentAlignment: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["top", "middle", "bottom"]>>>;
        }, "strip", import("zod").ZodTypeAny, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "bottom" | "middle" | "top" | null | undefined;
        }, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "bottom" | "middle" | "top" | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "bottom" | "middle" | "top" | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "bottom" | "middle" | "top" | null | undefined;
        } | null | undefined;
    }>;
    Text: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            color: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            backgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            fontSize: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
            fontFamily: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["bold", "normal"]>>>;
            textAlign: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEnum<["left", "center", "right"]>>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            markdown: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodBoolean>>;
            text: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
        }, "strip", import("zod").ZodTypeAny, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
        }, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "left" | "center" | "right" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
        } | null | undefined;
    }>;
    EmailLayout: import("zod").ZodObject<{
        backdropColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        borderColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        borderRadius: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
        canvasColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        textColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        fontFamily: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEnum<import("zod").Writeable<{}>>>>;
        childrenIds: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
    }, "strip", import("zod").ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    Spacer: import("zod").ZodObject<{
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            height: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>>;
        }, "strip", import("zod").ZodTypeAny, {
            height?: number | null | undefined;
        }, {
            height?: number | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }>;
    Divider: import("zod").ZodObject<{
        style: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            backgroundColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            padding: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
                top: import("zod").ZodNumber;
                bottom: import("zod").ZodNumber;
                right: import("zod").ZodNumber;
                left: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }, {
                top: number;
                bottom: number;
                right: number;
                left: number;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodObject<{
            lineColor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            lineHeight: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNumber>>;
        }, "strip", import("zod").ZodTypeAny, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        }, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        } | null | undefined;
    }>;
}>>;
export declare function useSelectedBlockId(): string | null;
export declare function useSelectedScreenSize(): "desktop" | "mobile";
export declare function useSelectedMainTab(): "editor" | "preview" | "json" | "html";
export declare function setSelectedMainTab(selectedMainTab: TValue['selectedMainTab']): void;
export declare function useSelectedSidebarTab(): "styles" | "block-configuration";
export declare function useInspectorDrawerOpen(): boolean;
export declare function useSamplesDrawerOpen(): boolean;
export declare function setSelectedBlockId(selectedBlockId: TValue['selectedBlockId']): void;
export declare function setSidebarTab(selectedSidebarTab: TValue['selectedSidebarTab']): void;
export declare function resetDocument(document: TValue['document']): void;
export declare function setDocument(document: TValue['document']): void;
export declare function toggleInspectorDrawerOpen(): void;
export declare function toggleSamplesDrawerOpen(): void;
export declare function setSelectedScreenSize(selectedScreenSize: TValue['selectedScreenSize']): void;
export {};
//# sourceMappingURL=EditorContext.d.ts.map