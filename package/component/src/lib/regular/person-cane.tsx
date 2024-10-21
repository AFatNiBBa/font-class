
import { Icon } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=regular person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 209.5L76.9 299.8c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7L93.7 172.7c15.6-27.6 44.9-44.7 76.6-44.7l35 0c26 0 50.6 11.5 67.3 31.4l81.7 97.2c8.5 10.1 7.2 25.3-2.9 33.8s-25.3 7.2-33.8-2.9L256 214.2 256 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136-32 0 0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-278.5zm80-33.4c-.9-.1-1.8-.1-2.7-.1L176 176l0 128 32 0 0-127.9zM352 376l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-30.9 25.1-56 56-56s56 25.1 56 56l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-4.4-3.6-8-8-8s-8 3.6-8 8z" />
    </Icon>
);

export default PersonCane;