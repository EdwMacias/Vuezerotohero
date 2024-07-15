<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi novia</span>
    </div>
    <ChatMessages :messages="messages" />
    <MessageBox @send-message="onMessage" />
  </div>
</template>
<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Un cafecito?',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'yes',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif',
  },
]);

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  });
}

</script>