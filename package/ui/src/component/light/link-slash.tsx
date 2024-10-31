
import { Icon } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=light link-slash}
 * @preview ![link-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/link-slash.svg)
 */
const LinkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM591.5 256c50-50 50-131 0-181s-131-50-181 0L387.9 97.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6c37.5-37.5 98.3-37.5 135.8 0s37.5 98.3 0 135.8L492 310.3l25.3 20L591.5 256zM414.6 412.2l-33.4-26.3c-26.1 1.3-52.5-8.1-72.5-28c-14.2-14.2-23-31.7-26.4-50.1L249 281.5c-2.4 35.7 10.1 72 37.2 99.1c34.8 34.8 84.6 45.3 128.5 31.7zM331.2 154.1c14.2 14.2 23 31.7 26.4 50.1L391 230.5c2.4-35.7-10.1-72-37.2-99.1c-34.8-34.8-84.6-45.3-128.5-31.7l33.4 26.3c26.1-1.3 52.5 8.1 72.5 28zM148 201.7l-25.3-20L48.5 256c-50 50-50 131 0 181s131 50 181 0l22.6-22.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-22.6 22.6c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8L148 201.7z" />
    </Icon>
);

export default LinkSlash;