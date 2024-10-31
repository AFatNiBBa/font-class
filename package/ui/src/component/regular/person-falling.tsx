
import { Icon } from "../../index";

/**
 * A component that renders the `person-falling` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling?s=regular person-falling}
 * @preview ![person-falling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-falling.svg)
 */
const PersonFalling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 10.4c0 46.1-28.9 87.3-72.2 103.1C137.5 160.1 96 219.3 96 285.6L96 360c0 13.3 10.7 24 24 24s24-10.7 24-24l0-74.4c0-10.7 1.5-21.1 4.4-30.9L307.9 501c7.2 11.1 22.1 14.3 33.2 7.1s14.3-22.1 7.1-33.2L263.6 344.3 327 304l46.3 0 64.8 72.1c8.9 9.9 24 10.6 33.9 1.8s10.6-24 1.8-33.9l-67.2-74.7c-7.6-8.4-18.4-13.2-29.7-13.2l-56.6 0-.6 0-19 0-58.2-85.9c47.4-28 77.5-79.3 77.5-135.8L320 24zM263.9 287.2L237.5 304l-61.8-95.5c6.7-6.8 14.4-12.8 22.8-17.7l65.4 96.4zM112 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default PersonFalling;