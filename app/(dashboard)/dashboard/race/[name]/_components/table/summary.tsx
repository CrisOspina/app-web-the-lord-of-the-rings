import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/app/_components/alert-dialog'

import Text from '@/app/_components/text'
import { DocsCharacter } from '@/app/api/_external-libs/the-open-api-v2'

type Props = {
  summary: DocsCharacter
  name: string
}

export default function Summary({ summary, name }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Text className='font-harrington'>Open Detail</Text>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Text className='font-harrington text-yellow-106-2 mb-4'>
              Detail {name}
            </Text>
            <hr className='bg-yellow-104-2 my-2' />
          </AlertDialogTitle>
          <AlertDialogDescription className='space-y-2'>
            {Object.entries(summary).map(([key, value]) => {
              if (key !== '_id' && key !== 'wikiUrl' && value) {
                return (
                  <Text
                    key={key}
                    as='p'
                    className='font-lucida-reg text-yellow-106-2'>
                    {key}:{' '}
                    <Text
                      as='span'
                      className='font-lucida-reg text-yellow-106-2 !font-normal'>
                      {value}
                    </Text>
                  </Text>
                )
              }
              return null
            })}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            <Text className='font-harrington text-yellow-106-2 mb-4'>
              Close detail
            </Text>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
