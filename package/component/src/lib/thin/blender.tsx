
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=thin blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 176c0 35.3 28.7 64 64 64l84 0 9.5 114.1C122.2 362.5 96 394.2 96 432l0 32c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-32c0-36.1-24-66.7-56.9-76.6L502.1 39.8C507.1 19.6 491.8 0 471 0L160 0 145.4 0 64 0zm65.4 16c0 .4 0 .9 .1 1.3L146.7 224 64 224c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l65.4 0zm278 336.3c-2.4-.2-4.9-.3-7.4-.3l-224 0c-.9 0-1.7 0-2.6 0l-28-336L160 16l311 0c10.4 0 18 9.8 15.5 19.9L471.5 96 296 96c-4.4 0-8 3.6-8 8s3.6 8 8 8l171.5 0-20 80L296 192c-4.4 0-8 3.6-8 8s3.6 8 8 8l147.5 0L407.4 352.3zM176 368l224 0c35.3 0 64 28.7 64 64l0 32c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-32c0-35.3 28.7-64 64-64zm112 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Blender;