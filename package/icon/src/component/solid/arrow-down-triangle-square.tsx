
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-triangle-square` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-triangle-square?s=solid arrow-down-triangle-square}
 * @preview ![arrow-down-triangle-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIuNDA0IDMzMC42NjRMMTYwIDM2Ni4wNjJWNjQuMDMxQzE2MCA0Ni4zMjggMTQ1LjY3MSAzMiAxMjggMzJTOTYgNDYuMzI4IDk2IDY0LjAzMVYzNjYuMDYzTDYzLjU5NSAzMzAuNjY0QzUyLjE3MyAzMTguMjExIDMxLjk2OCAzMTYuMjM0IDE4LjM3NyAzMjguNjk1QzUuMzQ3IDM0MC42NDggNC40NzIgMzYwLjkxNCAxNi40MDggMzczLjk2MUwxMDQuNDA2IDQ3MC4wNTVDMTE2LjUzMSA0ODMuMzEzIDEzOS40NjggNDgzLjMxMyAxNTEuNTkzIDQ3MC4wNTVMMjM5LjU5MSAzNzMuOTYxQzI1MS41MjcgMzYwLjkxNCAyNTAuNjUyIDM0MC42NDggMjM3LjYyMyAzMjguNjk1QzIyNC42MDcgMzE2Ljc1IDIwNC4zNTcgMzE3LjY1NiAxOTIuNDA0IDMzMC42NjRaTTQ5Mi4xMzIgMTgyLjg5NUw0MDkuMDA1IDQ1Ljc4MUMzOTcuODggMjcuNDA2IDM3MC4yNTUgMjcuNDA2IDM1OS4xMyA0NS43ODFMMjc1Ljg4IDE4Mi44OTVDMjY0Ljg4IDIwMS4xNDUgMjc4LjYzIDIyNC4wMTYgMzAwLjg4IDIyNC4wMTZINDY3LjEzQzQ4OS4zODIgMjI0LjAxNiA1MDMuMTMyIDIwMS4xNDUgNDkyLjEzMiAxODIuODk1Wk00NDguMDA3IDI4OC4wMTZIMzIwLjAwNUMzMDIuMzMyIDI4OC4wMTYgMjg4LjAwNSAzMDIuMzQ0IDI4OC4wMDUgMzIwLjAxNlY0NDhDMjg4LjAwNSA0NjUuNjcyIDMwMi4zMzIgNDgwIDMyMC4wMDUgNDgwSDQ0OC4wMDdDNDY1LjY4MSA0ODAgNDgwLjAwNyA0NjUuNjcyIDQ4MC4wMDcgNDQ4VjMyMC4wMTZDNDgwLjAwNyAzMDIuMzQ0IDQ2NS42ODEgMjg4LjAxNiA0NDguMDA3IDI4OC4wMTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownTriangleSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M192.404 330.664L160 366.062V64.031C160 46.328 145.671 32 128 32S96 46.328 96 64.031V366.063L63.595 330.664C52.173 318.211 31.968 316.234 18.377 328.695C5.347 340.648 4.472 360.914 16.408 373.961L104.406 470.055C116.531 483.313 139.468 483.313 151.593 470.055L239.591 373.961C251.527 360.914 250.652 340.648 237.623 328.695C224.607 316.75 204.357 317.656 192.404 330.664ZM492.132 182.895L409.005 45.781C397.88 27.406 370.255 27.406 359.13 45.781L275.88 182.895C264.88 201.145 278.63 224.016 300.88 224.016H467.13C489.382 224.016 503.132 201.145 492.132 182.895ZM448.007 288.016H320.005C302.332 288.016 288.005 302.344 288.005 320.016V448C288.005 465.672 302.332 480 320.005 480H448.007C465.681 480 480.007 465.672 480.007 448V320.016C480.007 302.344 465.681 288.016 448.007 288.016Z" />
        </Icon>
    </>
}