<template>
  <CustomModal :width="'w-[330px]'">
    <template #header>
      정말 삭제하시겠습니까?
    </template>
    <template #button>
      <Button @click="handleCloseModal" variant="gray">
        <template #text>취소</template>
      </Button>
      <Button @click="handleDelete">
        <template #text>삭제</template>
      </Button>
    </template>
  </CustomModal>
</template>

<script setup lang="ts">
import CustomModal from '@/common/components/CustomModal.vue'
import Button from '@/common/components/button/MainButton.vue'

const emit = defineEmits(['closeModal', 'delete'])

const handleCloseModal = () => {
  emit('closeModal')
}

const handleDelete = () => {
  emit('delete')
}
</script>

<style></style>