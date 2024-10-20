
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=sharp-regular square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l352 0 0 100.1c14-9.8 30.3-16.4 48-18.9L448 80l0-48-48 0L48 32 0 32 0 80 0 432l0 48 48 0 272 0 0-48L48 432 48 80zm197.7 61.8L239.2 128l-30.5 0-6.5 13.8L88.6 384l53 0 22.5-48 119.7 0 22.5 48 13.6 0 0-83.9L245.7 141.8zM224 208.5L261.3 288l-74.6 0L224 208.5zM464 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default SquareALock;