
import { Icon } from "../../index";

/**
 * A component that renders the `wreath` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wreath?s=sharp-solid wreath}
 * @preview ![wreath](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wreath.svg)
 */
const Wreath: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M182.6 0c15.8 0 30.2 5.7 41.4 15.2C235.2 5.7 249.6 0 265.4 0c27.9 0 51.6 17.8 60.3 42.6c5.8-1.7 11.9-2.6 18.2-2.6c35.3 0 64 28.7 64 64c0 6.3-.9 12.5-2.6 18.2c24.8 8.8 42.6 32.5 42.6 60.3c0 15.8-5.7 30.2-15.2 41.4c9.5 11.2 15.2 25.6 15.2 41.4c0 27.9-17.8 51.6-42.6 60.3c1.7 5.8 2.6 11.9 2.6 18.2c0 32.6-24.4 59.6-56 63.5l0-23.5 0-44.4-42.1 14L224 382.3l-85.9-28.6L96 339.6 96 384l0 23.5c-31.6-3.9-56-30.9-56-63.5c0-6.3 .9-12.5 2.6-18.2C17.8 317 0 293.3 0 265.4c0-15.8 5.7-30.2 15.2-41.4C5.7 212.8 0 198.4 0 182.6c0-27.9 17.8-51.6 42.6-60.3C40.9 116.5 40 110.3 40 104c0-35.3 28.7-64 64-64c6.3 0 12.5 .9 18.2 2.6C131 17.8 154.7 0 182.6 0zM224 120l-29.8 31.9-43.7-1.5 1.5 43.7L120 224l31.9 29.8-1.5 43.7 43.7-1.5L224 328l29.8-31.9 43.7 1.5-1.5-43.7L328 224l-31.9-29.8 1.5-43.7-43.7 1.5L224 120zM128 384l96 32 96-32 0 128-96-32-96 32 0-128z" />
    </Icon>
);

export default Wreath;