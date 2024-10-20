
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-list` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-list?s=sharp-thin trash-can-list}
 * @preview ![trash-can-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-can-list.svg)
 */
const TrashCanList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M147.6 0l-2.4 3.8L107.6 64 0 64 0 80l416 0 0-16L308.4 64 270.8 3.8 268.4 0 264 0 152 0l-4.4 0zm112 16l30 48L126.4 64l30-48 103.1 0zM48 120l0-8-16 0 0 8 0 384 0 8 8 0 336 0 8 0 0-8 0-384 0-8-16 0 0 8 0 376L48 496l0-376zm120 32l-16 0 0 8 0 256 0 8 16 0 0-8 0-256 0-8zm96 0l-16 0 0 8 0 256 0 8 16 0 0-8 0-256 0-8zm376-24l-192 0 0 16 192 0 0-16zM608 256l-160 0 0 16 160 0 0-16zM448 384l0 16 96 0 0-16-96 0z" />
    </Icon>
);

export default TrashCanList;