
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-word` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-word?s=sharp-solid cloud-word}
 * @preview ![cloud-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-word.svg)
 */
const CloudWord: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336L0 480zM512 352l0 32-16 0-192 0-16 0 0-32 16 0 192 0 16 0zm-272 0l16 0 0 32-16 0-96 0-16 0 0-32 16 0 96 0zM128 288l16 0 192 0 16 0 0 32-16 0-192 0-16 0 0-32zm272 0l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default CloudWord;