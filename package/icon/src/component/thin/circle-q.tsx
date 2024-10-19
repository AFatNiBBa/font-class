
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=thin circle-q}
 * @preview ![circle-q](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTI4QzE4NS40MDYgMTI4IDEyOCAxODUuNDIyIDEyOCAyNTZTMTg1LjQwNiAzODQgMjU2IDM4NEMyODguNDEgMzg0IDMxNy43MDMgMzcxLjUwOCAzNDAuMjczIDM1MS41ODZMMzcwLjM0NCAzODEuNjU2QzM3MS45MDYgMzgzLjIxOSAzNzMuOTM4IDM4NCAzNzYgMzg0UzM4MC4wOTQgMzgzLjIxOSAzODEuNjU2IDM4MS42NTZDMzg0Ljc4MSAzNzguNTMxIDM4NC43ODEgMzczLjQ2OSAzODEuNjU2IDM3MC4zNDRMMzUxLjU4NCAzNDAuMjcxQzM3MS41MDggMzE3LjY5NyAzODQgMjg4LjQwNiAzODQgMjU2QzM4NCAxODUuNDIyIDMyNi41OTQgMTI4IDI1NiAxMjhaTTM0MC4yNzEgMzI4Ljk1OUwzMDEuNjU2IDI5MC4zNDRDMjk4LjUzMSAyODcuMjE5IDI5My40NjkgMjg3LjIxOSAyOTAuMzQ0IDI5MC4zNDRTMjg3LjIxOSAyOTguNTMxIDI5MC4zNDQgMzAxLjY1NkwzMjguOTU5IDM0MC4yNzFDMzA5LjMwMyAzNTcuMzEyIDI4My45OSAzNjggMjU2IDM2OEMxOTQuMjUgMzY4IDE0NCAzMTcuNzUgMTQ0IDI1NlMxOTQuMjUgMTQ0IDI1NiAxNDRTMzY4IDE5NC4yNSAzNjggMjU2QzM2OCAyODMuOTkgMzU3LjMxMiAzMDkuMzAzIDM0MC4yNzEgMzI4Ljk1OVpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODYgNDgwIDMyIDM3OS41MTQgMzIgMjU2UzEzMi40ODYgMzIgMjU2IDMyUzQ4MCAxMzIuNDg2IDQ4MCAyNTZTMzc5LjUxNCA0ODAgMjU2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleQ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 128C185.406 128 128 185.422 128 256S185.406 384 256 384C288.41 384 317.703 371.508 340.273 351.586L370.344 381.656C371.906 383.219 373.938 384 376 384S380.094 383.219 381.656 381.656C384.781 378.531 384.781 373.469 381.656 370.344L351.584 340.271C371.508 317.697 384 288.406 384 256C384 185.422 326.594 128 256 128ZM340.271 328.959L301.656 290.344C298.531 287.219 293.469 287.219 290.344 290.344S287.219 298.531 290.344 301.656L328.959 340.271C309.303 357.312 283.99 368 256 368C194.25 368 144 317.75 144 256S194.25 144 256 144S368 194.25 368 256C368 283.99 357.312 309.303 340.271 328.959ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}