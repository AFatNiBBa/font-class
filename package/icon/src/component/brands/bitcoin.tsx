
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin?s=brands bitcoin}
 * @preview ![bitcoin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTA0IDI1NmMwIDEzNi45NjctMTExLjAzMyAyNDgtMjQ4IDI0OFM4IDM5Mi45NjcgOCAyNTYgMTE5LjAzMyA4IDI1NiA4czI0OCAxMTEuMDMzIDI0OCAyNDh6bS0xNDEuNjUxLTM1LjMzYzQuOTM3LTMyLjk5OS0yMC4xOTEtNTAuNzM5LTU0LjU1LTYyLjU3M2wxMS4xNDYtNDQuNzAyLTI3LjIxMy02Ljc4MS0xMC44NTEgNDMuNTI0Yy03LjE1NC0xLjc4My0xNC41MDItMy40NjQtMjEuODAzLTUuMTNsMTAuOTI5LTQzLjgxLTI3LjE5OC02Ljc4MS0xMS4xNTMgNDQuNjg2Yy01LjkyMi0xLjM0OS0xMS43MzUtMi42ODItMTcuMzc3LTQuMDg0bC4wMzEtLjE0LTM3LjUzLTkuMzctNy4yMzkgMjkuMDYyczIwLjE5MSA0LjYyNyAxOS43NjUgNC45MTNjMTEuMDIyIDIuNzUxIDEzLjAxNCAxMC4wNDQgMTIuNjggMTUuODI1bC0xMi42OTYgNTAuOTI1Yy43Ni4xOTQgMS43NDQuNDczIDIuODI5LjkwNy0uOTA3LS4yMjUtMS44NzYtLjQ3My0yLjg3Ni0uNzEzbC0xNy43OTYgNzEuMzM4Yy0xLjM0OSAzLjM0OC00Ljc2NyA4LjM3LTEyLjQ3MSA2LjQ2NC4yNzEuMzk1LTE5Ljc4LTQuOTM3LTE5Ljc4LTQuOTM3bC0xMy41MSAzMS4xNDcgMzUuNDE0IDguODI3YzYuNTg4IDEuNjUxIDEzLjA0NSAzLjM3OSAxOS40IDUuMDA2bC0xMS4yNjIgNDUuMjEzIDI3LjE4MiA2Ljc4MSAxMS4xNTMtNDQuNzMzYTEwMzguMjA5IDEwMzguMjA5IDAgMCAwIDIxLjY4NyA1LjYyN2wtMTEuMTE1IDQ0LjUyMyAyNy4yMTMgNi43ODEgMTEuMjYyLTQ1LjEyOGM0Ni40MDQgOC43ODEgODEuMjk5IDUuMjM5IDk1Ljk4Ni0zNi43MjcgMTEuODM2LTMzLjc5LS41ODktNTMuMjgxLTI1LjAwNC02NS45OTEgMTcuNzgtNC4wOTggMzEuMTc0LTE1Ljc5MiAzNC43NDctMzkuOTQ5em0tNjIuMTc3IDg3LjE3OWMtOC40MSAzMy43OS02NS4zMDggMTUuNTIzLTgzLjc1NSAxMC45NDNsMTQuOTQ0LTU5Ljg5OWMxOC40NDYgNC42MDMgNzcuNiAxMy43MTcgNjguODExIDQ4Ljk1NnptOC40MTctODcuNjY3Yy03LjY3MyAzMC43MzYtNTUuMDMxIDE1LjEyLTcwLjM5MyAxMS4yOTJsMTMuNTQ4LTU0LjMyN2MxNS4zNjMgMy44MjggNjQuODM2IDEwLjk3MyA1Ni44NDUgNDMuMDM1eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bitcoin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
    </Icon>
);

export default Bitcoin;