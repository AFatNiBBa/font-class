
import { Icon } from "../../index";

/**
 * A component that renders the `candy-cane` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-cane?s=sharp-regular candy-cane}
 * @preview ![candy-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/candy-cane.svg)
 */
const CandyCane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343 82.3L332.8 51.9c9.1-2.6 18.6-3.9 28.1-3.9c22.7 0 43.6 7.3 60.7 19.7l-23 23C387.7 83.9 374.8 80 361 80c-6.1 0-12.1 .8-18 2.3zm78.3 31.1l23-23c12.4 17 19.7 38 19.7 60.7l0 5.6c0 7-.7 13.8-2 20.5l-30.7-10.2c.5-3.4 .7-6.8 .7-10.3l0-5.6c0-13.8-3.9-26.7-10.8-37.6zm30.2 93.9c-8.8 16.7-22 31.1-38.5 41.4L375 272.5l-30.2-18.9 51.2-32c10.1-6.3 18.4-14.8 24.5-24.6l30.9 10.3zm-106.6 84l-77 48.1-30.2-18.9 77-48.1 30.2 18.9zm-107.2 67l-73 45.6-30.2-18.9 73-45.6 30.2 18.9zM134.4 422.9l-36.8 23-17-27.1L104.2 404l30.2 18.9zM303.6 65.4L314 96.6l-30.5 19.1-17-27.1 37-23.1zm5.4 91l39.8-24.9c3.7-2.3 7.9-3.5 12.2-3.5c12.7 0 23 10.3 23 23l0 5.6c0 9.9-5.1 19.1-13.5 24.3L55.2 378 14.5 403.5 40 444.2l17 27.1L82.4 512l40.7-25.4L438.4 289.5c45.8-28.6 73.6-78.8 73.6-132.8l0-5.6C512 67.6 444.4 0 361 0c-28.3 0-56 8-80 23L241.1 47.8 200.4 73.3 225.9 114l17 27.1 25.4 40.7L309 156.4z" />
    </Icon>
);

export default CandyCane;