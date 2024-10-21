
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=sharp-regular windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 0l0 24 0 72 80 0 0-48 48 10 336 70 0 160L176 358l-48 10 0-48-80 0 0 168 0 24L0 512l0-24L0 296 0 120 0 24 0 0 48 0zm0 144l0 128 80 0 0-128-80 0zm128-37L176 309l64-13.3 0-175.3L176 107zm112 23.3l0 155.3L368 269 368 147l-80-16.7zM416 157L416 259l48-10 0-81.9-48-10z" />
    </Icon>
);

export default Windsock;