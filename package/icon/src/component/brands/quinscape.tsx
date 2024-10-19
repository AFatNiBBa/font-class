
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `quinscape` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/quinscape?s=brands quinscape}
 * @preview ![quinscape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTMuNiA0NzQuNmgtMWExNTguMSAxNTguMSAwIDAgMSAwLTMxNi4yYzk0LjkgMCAxNjguMiA4My4xIDE1NyAxNzYuNiA0IDUuMSA4LjIgOS42IDExLjIgMTUuMyAxMy40LTMwLjMgMjAuMy02Mi40IDIwLjMtOTcuN0M1MDEuMSAxMTcuNSAzOTEuNiA4IDI1Ni41IDhTMTIgMTE3LjUgMTIgMjUyLjZzMTA5LjUgMjQ0LjYgMjQ0LjUgMjQ0LjZhMjM3LjM2IDIzNy4zNiAwIDAgMCA3MC40LTEwLjFjLTUuMi0zLjUtOC45LTguMS0xMy4zLTEyLjV6bS0uMS0uMWwuNC4xem03OC40LTE2OC45YTk5LjIgOTkuMiAwIDEgMCA5OS4yIDk5LjIgOTkuMTggOTkuMTggMCAwIDAtOTkuMi05OS4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Quinscape(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M313.6 474.6h-1a158.1 158.1 0 0 1 0-316.2c94.9 0 168.2 83.1 157 176.6 4 5.1 8.2 9.6 11.2 15.3 13.4-30.3 20.3-62.4 20.3-97.7C501.1 117.5 391.6 8 256.5 8S12 117.5 12 252.6s109.5 244.6 244.5 244.6a237.36 237.36 0 0 0 70.4-10.1c-5.2-3.5-8.9-8.1-13.3-12.5zm-.1-.1l.4.1zm78.4-168.9a99.2 99.2 0 1 0 99.2 99.2 99.18 99.18 0 0 0-99.2-99.2z" />
        </Icon>
    </>
}