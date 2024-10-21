
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=thin trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M157.4 27.3L134.4 64l147.1 0-23-36.7c-4.4-7-12.1-11.3-20.4-11.3l-60.5 0c-8.3 0-16 4.3-20.4 11.3zM115.6 64l28.2-45.2C151.1 7.1 163.9 0 177.7 0l60.5 0c13.8 0 26.6 7.1 33.9 18.8L300.4 64 408 64c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 80c-4.4 0-8-3.6-8-8s3.6-8 8-8l107.6 0zM39.3 112c4.4-.4 8.3 2.9 8.6 7.3l28.3 340C78 480.1 95.4 496 116.2 496l183.7 0c20.8 0 38.1-15.9 39.9-36.7l28.3-340c.4-4.4 4.2-7.7 8.6-7.3s7.7 4.2 7.3 8.6l-28.3 340c-2.4 29-26.7 51.4-55.8 51.4l-183.7 0c-29.1 0-53.4-22.3-55.8-51.4L32 120.7c-.4-4.4 2.9-8.3 7.3-8.6zM456 128l176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 128l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-8 136c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default TrashList;