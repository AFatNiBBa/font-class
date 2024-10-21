
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=sharp-solid bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l32 0 512 0 32 0 0 64-32 0-40 0 0 64-8 0c-61.9 0-112 50.1-112 112l0 16-32 0 0 24.4c-17-15.2-39.4-24.4-64-24.4c-53 0-96 43-96 96l0 96-96 0 0-96c0-53-43-96-96-96l0-128 72 0 0-64L64 96 32 96l0-64zM408 96l0 64 80 0 0-64-80 0zm-48 64l0-64-80 0 0 64 80 0zM152 96l0 64 80 0 0-64-80 0zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default BridgeLock;