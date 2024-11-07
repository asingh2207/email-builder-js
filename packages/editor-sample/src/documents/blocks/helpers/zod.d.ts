import { z } from 'zod';
export declare function zColor(): z.ZodString;
export declare function zFontFamily(): z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>;
export declare function zFontWeight(): z.ZodEnum<z.Writeable<{}>>;
export declare function zTextAlign(): z.ZodEnum<z.Writeable<{}>>;
export declare function zPadding(): z.ZodObject<{
    top: z.ZodNumber;
    bottom: z.ZodNumber;
    right: z.ZodNumber;
    left: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
//# sourceMappingURL=zod.d.ts.map