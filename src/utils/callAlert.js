import Swal from 'sweetalert2'



export const alertSuccess = (message) => {
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
    })
}

export const alertError = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
    })
}

export const alertConfirm = (message) => {
    return Swal.fire({
        icon: 'question',
        title: 'Apakah Anda Yakin?',
        text: message,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    })
}