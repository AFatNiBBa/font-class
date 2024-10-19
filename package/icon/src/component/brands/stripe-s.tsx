
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stripe-s` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stripe-s?s=brands stripe-s}
 * @preview ![stripe-s](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTUuMyAxNTQuNmMwLTIyLjMgMTguNi0zMC45IDQ4LjQtMzAuOSA0My40IDAgOTguNSAxMy4zIDE0MS45IDM2LjdWMjYuMUMyOTguMyA3LjIgMjUxLjEgMCAyMDMuOCAwIDg4LjEgMCAxMSA2MC40IDExIDE2MS40YzAgMTU3LjkgMjE2LjggMTMyLjMgMjE2LjggMjAwLjQgMCAyNi40LTIyLjkgMzQuOS01NC43IDM0LjktNDcuMiAwLTEwOC4yLTE5LjUtMTU2LjEtNDUuNXYxMjguNWEzOTYuMDkgMzk2LjA5IDAgMCAwIDE1NiAzMi40YzExOC42IDAgMjAwLjMtNTEgMjAwLjMtMTUzLjYgMC0xNzAuMi0yMTgtMTM5LjctMjE4LTIwMy45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StripeS(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M155.3 154.6c0-22.3 18.6-30.9 48.4-30.9 43.4 0 98.5 13.3 141.9 36.7V26.1C298.3 7.2 251.1 0 203.8 0 88.1 0 11 60.4 11 161.4c0 157.9 216.8 132.3 216.8 200.4 0 26.4-22.9 34.9-54.7 34.9-47.2 0-108.2-19.5-156.1-45.5v128.5a396.09 396.09 0 0 0 156 32.4c118.6 0 200.3-51 200.3-153.6 0-170.2-218-139.7-218-203.9z" />
        </Icon>
    </>
}