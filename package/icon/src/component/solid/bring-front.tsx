
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=solid bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l64 0 32 0 32 0 64 0c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l64 0 0-64-64 0L64 64zM480 448l-32 0-64 0c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-64 0 0 64 64 0 0 128-64 0-32 0zM224 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L224 96z" />
    </Icon>
);

export default BringFront;