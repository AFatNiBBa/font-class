
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=regular ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ellipsis-stroke-vertical.svg)
 */
const EllipsisStrokeVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 88A64 64 0 1 1 96 32a64 64 0 1 1 0 128zm24 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-88 0a64 64 0 1 1 128 0A64 64 0 1 1 32 256zm88 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-88 0a64 64 0 1 1 128 0A64 64 0 1 1 32 416z" />
    </Icon>
);

export default EllipsisStrokeVertical;