<template>
    <div id="modal">
        <div class="modal-content">
            <h2>Are you sure you want to delete that quiz?</h2>
            <div class="modal-buttons">
                <button @click="$emit('confirm')" id="yes-button">Yes</button>
                <button @click="$emit('closeDeleteModal')" id="no-button">No</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.modal-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

#delete-quiz {
    background-color: red;
}

#yes-button {
    background-color: #0D5D56;
}

#no-button {
    background-color: gray;
}
</style>