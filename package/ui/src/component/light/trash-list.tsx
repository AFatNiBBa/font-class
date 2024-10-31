
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=light trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M164.2 39.5L148.9 64l118.3 0L251.8 39.5c-2.9-4.7-8.1-7.5-13.6-7.5l-60.5 0c-5.5 0-10.6 2.8-13.6 7.5zM279 22.6L304.9 64l47.1 0L384 64l16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-18.3 0L356.2 452.6C353.9 486.1 326 512 292.4 512l-168.8 0c-33.6 0-61.4-25.9-63.8-59.4L34.3 96 16 96C7.2 96 0 88.8 0 80s7.2-16 16-16l16 0 32.1 0 47.1 0L137 22.6C145.8 8.5 161.2 0 177.7 0l60.5 0c16.6 0 31.9 8.5 40.7 22.6zM66.4 96L91.7 450.3C92.9 467 106.8 480 123.6 480l168.8 0c16.8 0 30.7-13 31.9-29.7L349.6 96 66.4 96zM464 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM448 400c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default TrashList;