
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=solid radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192l0 4L0 304 0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-229.5 0L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 336c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Radio;