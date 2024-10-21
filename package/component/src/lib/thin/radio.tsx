
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=thin radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M506.1 15.7c4.3-1.2 6.8-5.6 5.6-9.8s-5.6-6.8-9.8-5.6L53 123.4c-26.4 7.2-46 28.7-51.4 54.7C.5 182.6 0 187.2 0 192l0 .8L0 240 0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96.6 128 506.1 15.7zM16 192.8c0-3.8 .4-7.6 1.1-11.2C21.9 160.1 41.1 144 64 144l384 0c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-208 0-47.2zM352 400a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm0-176a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM88 240c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L88 240zM72 312c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 312zm16 72c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L88 384z" />
    </Icon>
);

export default Radio;