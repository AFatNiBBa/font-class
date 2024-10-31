
import { Icon } from "../../index";

/**
 * A component that renders the `square-q` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-q?s=sharp-regular square-q}
 * @preview ![square-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-q.svg)
 */
const SquareQ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM224 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c13.9 0 26.9-3.5 38.3-9.7L206.1 256l61.5 0 28.3 35.3c5.3-10.7 8.2-22.6 8.2-35.3c0-44.2-35.8-80-80-80zm0 208c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 28.1-9 54-24.4 75.1L369.9 384l-61.5 0-15.9-19.9C272.7 376.7 249.2 384 224 384z" />
    </Icon>
);

export default SquareQ;