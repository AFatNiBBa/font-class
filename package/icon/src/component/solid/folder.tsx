
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=solid folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Folder;