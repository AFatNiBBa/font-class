
import { Icon } from "../../index";

/**
 * A component that renders the `soap` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=thin soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM96 192l129.3 0c.9 5.5 2.3 10.9 4.1 16L96 208c-44.2 0-80 35.8-80 80l0 128c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-128c0-44.2-35.8-80-80-80l-5.5 0c1.8-5.1 3.2-10.5 4.1-16l1.3 0c53 0 96 43 96 96l0 128c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 288c0-53 43-96 96-96zM80 352c0-44.2 35.8-80 80-80l160 0 32 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-192 0c-44.2 0-80-35.8-80-80zm16 0c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-192 0c-35.3 0-64 28.7-64 64zM384 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM368 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Soap;