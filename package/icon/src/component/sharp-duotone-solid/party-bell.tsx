
import { Icon, generic } from "../../index";

/**
 * A component that renders the `party-bell` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/party-bell?s=sharp-duotone-solid party-bell}
 * @preview ![party-bell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/party-bell.svg)
 */
const PartyBell: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 480a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM150.1 376l17 17 8.3 8.3c16.7 16.7 27.2 38.6 29.8 62.1l3 27.4 47.7-5.3-3-27.4c-3.8-34.3-19.2-66.3-43.6-90.7L201 359l-17-17L150.1 376zm128.1-98.8l15.5 18.3 8.5 10c4.9 5.8 7.5 13.2 7.3 20.7c-1.1 42.5 31.7 78.3 74.2 80.8l30 1.8c16.6 1 29.4 15 29 31.6c-.5 19.4 6.1 38.2 18.6 53l8.5 10 36.6-31-8.5-10c-4.9-5.8-7.5-13.2-7.3-20.7c1.1-42.5-31.7-78.3-74.2-80.8l-30-1.8c-16.6-1-29.4-15-29-31.6c.5-19.4-6.1-38.2-18.6-53l-8.5-10-15.5-18.3-36.6 31zM320 480a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm22.1-296l17 17 8.2 8.3c24.4 24.4 56.4 39.8 90.7 43.6l27.4 3 5.3-47.7-27.4-3c-23.5-2.6-45.4-13.1-62.1-29.8L393 167l-17-17L342.1 184zM448 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M65.6 65.6c-87.5 87.5-87.5 229.3 0 316.8L382.4 65.6c-87.5-87.5-229.3-87.5-316.8 0z" />
    </Icon>
);

export default PartyBell;