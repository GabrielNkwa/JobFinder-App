import React from 'react'
import { 
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl

} from 'react-native';
import{ Stack, useRouter, useSearchParams } from 'expo-router';
import {uaeCallback, useState} from 'react'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch'


const JobDetails  = () => {
  return (
    <Text>Job Details</Text>
  )
}

export default JobDetails