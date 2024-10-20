
import { Icon } from "../../index";

/**
 * A component that renders the `z` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=light z}
 * @preview ![z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/z.svg)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l352 0c6.2 0 11.9 3.6 14.5 9.3s1.7 12.3-2.3 17.1L50.5 448 368 448c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L333.5 64 16 64C7.2 64 0 56.8 0 48z" />
    </Icon>
);

export default Z;