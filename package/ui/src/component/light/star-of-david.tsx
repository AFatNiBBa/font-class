
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=light star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M418.3 286.6l-50 81.4 90.2 0c3 0 5.4-2.4 5.4-5.4c0-1-.3-2-.8-2.8l-44.9-73.1zM399.5 256L330.8 144l-149.6 0L112.5 256l68.7 112 149.6 0 68.7-112zm37.5 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4l-109.8 0-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400 53.4 400C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112l109.8 0 56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112l109.8 0c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zM368.4 144l50 81.4 44.9-73.1c.5-.9 .8-1.8 .8-2.8c0-3-2.4-5.4-5.4-5.4l-90.2 0zm-57.2-32L265.3 37.2c-2-3.2-5.5-5.2-9.3-5.2s-7.3 2-9.3 5.2L200.8 112l110.4 0zM143.6 144l-90.2 0c-3 0-5.4 2.4-5.4 5.4c0 1 .3 2 .8 2.8l44.9 73.1 50-81.4zm-50 142.6L48.8 359.7c-.5 .9-.8 1.8-.8 2.8c0 3 2.4 5.4 5.4 5.4l90.2 0-50-81.4zM200.8 400l45.9 74.8c2 3.2 5.5 5.2 9.3 5.2s7.3-2 9.3-5.2L311.2 400l-110.4 0z" />
    </Icon>
);

export default StarOfDavid;