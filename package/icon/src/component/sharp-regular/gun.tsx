
import { Icon } from "../../index";

/**
 * A component that renders the `gun` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=sharp-regular gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 56l0-24-48 0 0 24 0 8L24 64 0 64 0 88 0 216l0 24 24 0 68 0L44 432 32 480l49.5 0L208 480l32-128 104 0 16.9 0 5.7-15.9L400.9 240l39.1 0 9.9 0 7-7 25-25 70.1 0 24 0 0-24 0-96 0-24-24 0-24 0 0-8zM252 304l16-64 81.9 0-22.9 64L252 304zm-33.5-64l-48 192-77 0 48-192 77 0zM280 192l-49.5 0L104 192l-56 0 0-80 432 0 48 0 0 48-56 0-9.9 0-7 7-25 25L280 192z" />
    </Icon>
);

export default Gun;