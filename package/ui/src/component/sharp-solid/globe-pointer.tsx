
import { Icon } from "../../index";

/**
 * A component that renders the `globe-pointer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-pointer?s=sharp-solid globe-pointer}
 * @preview ![globe-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/globe-pointer.svg)
 */
const GlobePointer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M345.9 320l-64 0 20.9-71L263 209.3 160.4 239.5c.8-16.3 2.8-32.1 5.7-47.5l179.7 0c3.9 20.5 6.1 41.9 6.1 64s-2.2 43.5-6.1 64zM128.1 249L1.8 286.1C.6 276.2 0 266.2 0 256c0-22.1 2.8-43.5 8.1-64l125.6 0c-3.2 18.3-5.2 37.3-5.5 57zM234.5 481.1l38-129.1 65.9 0c-11.4 40.2-28.4 75.9-45.8 105.4c-13 21.9-25.9 40-36.5 53.5c-6.4-8.2-13.8-18.2-21.5-29.8zM384 256c0-22.1-2-43.5-5.6-64l125.6 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-125.6 0c3.6-20.5 5.6-41.9 5.6-64zm-12.6-96c-17-65.6-48.3-120-74-156.7c89.2 14.5 163 75.2 196 156.7l-122 0zm-197.7 0c11.4-40.2 28.4-75.9 45.8-105.4c13-21.9 25.9-40 36.5-53.5c10.5 13.5 23.5 31.6 36.5 53.5c17.4 29.4 34.5 65.1 45.8 105.4l-164.6 0zM214.6 3.3c-25.7 36.7-57 91-74 156.7l-122 0c33-81.5 106.7-142.2 196-156.7zM371.4 352l122 0c-33 81.5-106.7 142.2-196 156.7c25.7-36.7 57-91 74-156.7zM0 320l254.5-74.9 12.3 12.3L192 512l-48-96-1.4-1.4-96 96L1.4 465.4l96-96L96 368 0 320z" />
    </Icon>
);

export default GlobePointer;