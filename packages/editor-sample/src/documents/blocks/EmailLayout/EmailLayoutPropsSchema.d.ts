import { z } from 'zod';
declare const EmailLayoutPropsSchema: z.ZodObject<{
    backdropColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    canvasColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    textColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<z.Writeable<{}>>>>;
    childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export default EmailLayoutPropsSchema;
export type EmailLayoutProps = z.infer<typeof EmailLayoutPropsSchema>;
//# sourceMappingURL=EmailLayoutPropsSchema.d.ts.map