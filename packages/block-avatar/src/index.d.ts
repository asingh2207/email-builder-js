/// <reference types="react" />
import { z } from 'zod';
export declare const AvatarPropsSchema: any;
export type AvatarProps = z.infer<typeof AvatarPropsSchema>;
export declare const AvatarPropsDefaults: {
    readonly size: 64;
    readonly imageUrl: "";
    readonly alt: "";
    readonly shape: "square";
};
export declare function Avatar({ style, props }: AvatarProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map