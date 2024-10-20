
import { Icon } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=regular block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 80l0 48 56 0 48 0 56 0 0-48L144 80zM96 128l0-48L64 80c-8.8 0-16 7.2-16 16l0 32 48 0zM48 176l0 56 152 0 0-56L48 176zm0 160l48 0 0-56-48 0 0 56zm0 48l0 32c0 8.8 7.2 16 16 16l136 0 0-48-56 0-48 0-48 0zm96-48l160 0 0-56-160 0 0 56zm208 0l48 0 0-56-48 0 0 56zm48 48l-48 0-48 0-56 0 0 48 136 0c8.8 0 16-7.2 16-16l0-32zm0-208l-152 0 0 56 152 0 0-56zm0-48l0-32c0-8.8-7.2-16-16-16l-32 0 0 48 48 0zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default BlockBrick;