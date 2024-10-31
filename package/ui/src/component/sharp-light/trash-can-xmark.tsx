
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-xmark?s=sharp-light trash-can-xmark}
 * @preview ![trash-can-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-can-xmark.svg)
 */
const TrashCanXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l-8.9 0-4.7 7.5L111.1 64 64 64 32 64 0 64 0 96l32 0 0 384 0 32 32 0 320 0 32 0 0-32 0-384 32 0 0-32-32 0-32 0-47.1 0L301.6 7.5 296.9 0 288 0 160 0zM299.1 64L148.9 64l20-32 110.3 0 20 32zM64 480L64 96l320 0 0 384L64 480zm95.4-279.2l-22.6 22.6 11.3 11.3L201.4 288l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L224 310.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L246.6 288l53.3-53.3 11.3-11.3-22.6-22.6-11.3 11.3L224 265.4l-53.3-53.3-11.3-11.3z" />
    </Icon>
);

export default TrashCanXmark;