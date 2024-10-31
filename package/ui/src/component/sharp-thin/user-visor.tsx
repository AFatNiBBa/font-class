
import { Icon } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=sharp-thin user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M331.4 160c-13.8 46.3-56.6 80-107.4 80s-93.6-33.7-107.4-80l214.7 0zM96 160l4 0c14.2 55.2 64.3 96 124 96s109.8-40.8 124-96l4 0 16 0 0-16 0-64 0-16-16 0-17.1 0C312.7 25.7 271.4 0 224 0s-88.7 25.7-110.9 64L96 64 80 64l0 16 0 64 0 16 16 0zM224 16c38.1 0 71.7 19 91.9 48L132.1 64c20.2-29 53.9-48 91.9-48zM352 80l0 64L96 144l0-64 256 0zM128 104l-8 0 0 16 8 0 192 0 8 0 0-16-8 0-192 0zM75.8 320l296.4 0 54.2 176L21.7 496 75.8 320zM384 304L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304zm-56.7 60.7l-7.3-16-7.3 16-40 88-2.3 5 3.9 3.9 8 8 4.4 4.4 5.4-3.2 34.6-20.8 19.6 19.6 5.7 5.7 5.7-5.7 8-8 3.9-3.9-2.3-5-40-88zm-3.4 68.5l-34 20.4L320 387.3l27.8 61.1-14.1-14.1-4.4-4.4-5.4 3.2z" />
    </Icon>
);

export default UserVisor;