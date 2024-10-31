
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-plus?s=sharp-thin person-circle-plus}
 * @preview ![person-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-circle-plus.svg)
 */
const PersonCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm0-96a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM95.9 128l5 0 118.2 0 5 0 2.2 4.5 63.5 131.7c-3.7 5-7.1 10.2-10.2 15.6L214.1 144l-108.1 0L23.2 315.5l-3.5 7.2-14.4-7 3.5-7.2 84.9-176 2.2-4.5zM104 248l0 248 32 0 0-152 0-8 8 0 32 0 8 0 0 8 0 152 32 0 0-248 0-8 16 0 0 8 0 256 0 8-8 0-48 0-8 0 0-8 0-152-16 0 0 152 0 8-8 0-48 0-8 0 0-8 0-256 0-8 16 0 0 8zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm152-72l0 64 64 0 8 0 0 16-8 0-64 0 0 64 0 8-16 0 0-8 0-64-64 0-8 0 0-16 8 0 64 0 0-64 0-8 16 0 0 8z" />
    </Icon>
);

export default PersonCirclePlus;