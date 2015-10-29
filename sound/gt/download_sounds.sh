#!/bin/bash

for i in `seq 1 149`;
do
   wget -q -U Mozilla -O "num_$i.mp3" "http://translate.google.com/translate_tts?tl=fr&q=$i&client=t"
done

