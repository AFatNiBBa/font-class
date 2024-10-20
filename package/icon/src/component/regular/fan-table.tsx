
import { Icon } from "../../index";

/**
 * A component that renders the `fan-table` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fan-table?s=regular fan-table}
 * @preview ![fan-table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fan-table.svg)
 */
const FanTable: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 400a176 176 0 1 0 0-352 176 176 0 1 0 0 352zM448 224c0 115.6-87.6 210.8-200 222.7l0 17.3 112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-136 0L88 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0 0-17.3C87.6 434.8 0 339.6 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM118.4 197.6c-16.6-41 3.2-87.6 44.2-104.1c12.3-5 26.3 1 31.2 13.3l29.2 72.2c16.7-23.7 45.8-37.5 76.6-33.2c43.8 6.1 74.2 46.6 68.1 90.4c-1.8 13.1-14 22.3-27.1 20.4l-77.1-10.8c12.2 26.4 9.6 58.4-9.6 82.9c-27.2 34.8-77.5 41-112.3 13.8c-10.4-8.2-12.3-23.2-4.1-33.7l47.9-61.4c-28.9-2.6-55.4-21-67-49.7zM224 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default FanTable;