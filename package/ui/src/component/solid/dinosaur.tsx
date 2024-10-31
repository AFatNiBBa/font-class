
import { Icon } from "../../index";

/**
 * A component that renders the `dinosaur` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dinosaur?s=solid dinosaur}
 * @preview ![dinosaur](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dinosaur.svg)
 */
const Dinosaur: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M446.2 0L448 0C554 0 640 86 640 192l0 30.6c0 88-51.5 165.6-128 201.5l0 55.9c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-22c-15.3 3.9-31.4 6-48 6c-6.8 0-13.5-.4-20.1-1c-7.5-18.9-24.4-33.3-45.4-36.8L162 408.1c-19.6-3.3-34-20.2-34-40.1c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 35.5 25.7 65.8 60.7 71.7l108.5 18.1c13.2 2.2 22.8 13.6 22.8 26.9c0 15.1-12.2 27.3-27.3 27.3l-4.7 0-32 0-32 0-71.3 0C54.1 512 0 457.9 0 391.3c0-34 14.4-66.5 39.5-89.3l89.7-81.6C172 181.5 227.6 160 285.3 160c50.2 0 99 16.3 139.2 46.4L480 248c6.9 5.2 15.3 8 24 8c22.1 0 40-17.9 40-40l0-24c0-35.3-28.7-64-64-64l-32 0-32.3 0c-26.3 0-47.7-21.4-47.7-47.7l0-4.7c0-16.7 10.1-31.6 25.6-37.8l1.7-.7c8.2-3.3 14.8-9.4 18.7-17.2C420.2 7.7 432.6 0 446.2 0zM464 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Dinosaur;