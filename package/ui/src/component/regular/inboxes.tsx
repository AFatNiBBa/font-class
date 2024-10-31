
import { Icon } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=regular inboxes}
 * @preview ![inboxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/inboxes.svg)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M62.5 96l67.9 0c18.2 0 34.8 10.3 42.9 26.5L192 160l128 0 18.7-37.5c8.1-16.3 24.8-26.5 42.9-26.5l67.8 0-40-48-307 0-40 48zM48 144l0 96 416 0 0-96-82.3 0-18.7 37.5C354.8 197.7 338.2 208 320 208l-128 0c-18.2 0-34.8-10.3-42.9-26.5L130.3 144 48 144zM0 144l0-30.6c0-11.2 3.9-22.1 11.1-30.7L65.6 17.3C74.7 6.3 88.2 0 102.5 0l307 0c14.2 0 27.8 6.3 36.9 17.3l54.5 65.4c7.2 8.6 11.1 19.5 11.1 30.7l0 30.6 0 96c0 26.5-21.5 48-48 48L48 288c-26.5 0-48-21.5-48-48l0-96zM310.1 432l-108.2 0c-24.2 0-46.4-13.7-57.2-35.4L130.3 368 48 368l0 96 416 0 0-96-82.3 0-14.3 28.6-42.6-21.3 42.6 21.3c-10.8 21.7-33 35.4-57.2 35.4zM48 320l82.3 0c18.2 0 34.8 10.3 42.9 26.5l14.3 28.6c2.7 5.4 8.3 8.8 14.3 8.8l108.2 0c6.1 0 11.6-3.4 14.3-8.8l14.3-28.6c8.1-16.3 24.8-26.5 42.9-26.5l82.3 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default Inboxes;