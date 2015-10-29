#!/bin/bash

for i in `seq 1 149`;
do
    lame "num_$i.wav" "num_$i.mp3"
done

